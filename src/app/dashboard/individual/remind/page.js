"use client"
import { useEffect, useContext } from "react"
import checkExpiryDate from "@/app/utils/checkExpiryDate"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import SubHeader from "@/app/components/subHeader.js"
import ReminderCard from "@/app/components/reminderCard"
import { REMIND_TITLE } from "@/app/constant/remindConstants"

const RemindPage = () => {
  const {
    remindDueTable,
    remindAllTable,
    processRemindDueRecordingTable,
    processRemindAllRecordingTable,
  } = useContext(IndividualApiData)
  useEffect(() => {
    processRemindDueRecordingTable()
    processRemindAllRecordingTable()
  }, [])

  return (
    <>
      <SubHeader />
      <div style={{ maxHeight: "80vh", overflow: "auto" }}>
        <div>
          <ReminderCard title={REMIND_TITLE[0]} clients={remindDueTable} />
        </div>
        <div>
          <ReminderCard title={REMIND_TITLE[1]} clients={remindAllTable} />
        </div>
      </div>
    </>
  )
}
export default RemindPage
