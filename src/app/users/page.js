"use client"
import DASHBOARD_DEFAULTS from "@/app/constant/dashboardConstants.js"
import Card from "@/app/components/cards"

const Users = () => {
  const {
    processGetRecordingTable,
    recordTable,
    individualTable,
    searchRecord,
  } = useContext(OtherApiData)
  useEffect(() => {
    processGetRecordingTable(1)
  }, [])

  let dueRecords =
    individualTable &&
    individualTable.filter((item) => checkExpiryDate(item.expireDate))
  //checkExpiryDate(item.expiryDate)
  // console.log(dueRecords)

  return (
    <>
      <SubHeader />
      {recordTable && (
        <TableContainer tableHeader={DASHBOARDTABLE} tableInfo={dueRecords} />
      )}
    </>
  )
}
export default Users
