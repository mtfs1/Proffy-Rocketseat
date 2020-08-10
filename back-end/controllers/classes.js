const express = require("express")

const db = require("../database/conn")
const hoursInMinutes = require("../utils/toMinutes")

const router = express.Router()

router.post("/", async (req, res) => {
  const {
    name,
    link,
    whatsapp,
    bio,
    subject,
    hourPrice,
    schedules
  } = req.body
  
  const profileData = {
    name,
    link,
    whatsapp,
    bio
  }

  const classData = {
    proffy_id: null,
    subject,
    price: hourPrice
  }
  console.log(subject)
  try {
    const trx = await db.transaction()

    const profilesMatched = await trx("proffies").select("id").where(profileData)
    
    if (profilesMatched.length === 0) {
      const insertedProffiesIds =  await trx("proffies").insert(profileData) 
      classData.proffy_id = insertedProffiesIds[0]
    } else {
      classData.proffy_id = profilesMatched[0].id
    }

    const hasClass = await trx("classes").select("id").where(classData)

    const id = (hasClass.length === 0) ?
      await trx("classes").insert(classData) :
      hasClass[0].id

    const classesSchedules = schedules.map(sch => ({
      week_day: parseInt(sch.day),
      minute_begin: hoursInMinutes(sch.minuteBegin),
      minute_end: hoursInMinutes(sch.minuteEnd),
      class_id: id
    }))

    const filteredSchedules = classesSchedules.map(async sch => {
      const repeated = await trx("classes_schedules").select("id").where(sch)
      if(repeated.length > 0) {
        return false
      } else {
        return sch
      }
    })

    const finalSchedules = await Promise.all(filteredSchedules)
    await trx("classes_schedules").insert(finalSchedules)

    trx.commit()
    res.send({msg: "ok"})
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.get("/", async (req, res) => {
  const {subject, day, time} = req.query
  const minutes = hoursInMinutes(time)
  
  try {
    const query = db("classes_schedules")
      .join("classes", "classes_schedules.class_id", "=", "classes.id")
      .join("proffies", "proffies.id", "=", "classes.proffy_id")
      .limit(10)
      .modify(qb => {
        if(subject)
          qb.where("classes.subject", subject)
        if(day) {
          qb.where("classes_schedules.week_day", day)
          if(time) {
            qb.where( "classes_schedules.minute_begin", "<=", minutes)
            qb.where( "classes_schedules.minute_end", ">=", minutes)
          }
        }
      })

    const classes = await query.select("*")

    res.json(classes)
  } catch (err) {
    res.status(400).json(err)
    console.log(err)
  }

})

module.exports = router