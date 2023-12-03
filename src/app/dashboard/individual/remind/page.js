"use client"
import { useEffect, useContext } from "react"
import checkExpiryDate from "@/app/utils/checkExpiryDate"
import { IndividualApiData } from "@/app/context/Individual/IndividualContextApi"
import SubHeader from "@/app/components/subHeader.js"
import ReminderCard from "@/app/components/reminderCard"
import { REMIND_TITLE } from "@/app/constant/remindConstants"

const RemindPage = () => {
  const { processGetRecordingTable, individualTable } =
    useContext(IndividualApiData)
  useEffect(() => {
    processGetRecordingTable(1)
  }, [])

  let dueRecords =
    individualTable &&
    individualTable.filter((item) => checkExpiryDate(item.expireDate) === false)

  return (
    <>
      <SubHeader />
      <div>
        <ReminderCard title={REMIND_TITLE[0]} clients={dueRecords} />
      </div>
      <div>
        <ReminderCard title={REMIND_TITLE[1]} clients={individualTable} />
      </div>
    </>
  )
}
export default RemindPage
