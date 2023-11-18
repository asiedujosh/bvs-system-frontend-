import useSWR from "swr"
import { getRecordingTable } from "../context/Individual/Individual"
import { TABLECONSTANTS } from "../constant/IndividualConstants"

export const processGetRecordingTable = async (page) => {
  const { data, error } = useSWR(
    `/api/records?page=${page}&perPage=${TABLECONSTANTS.listOnPages}`,
    getRecordingTable
  )
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  }
}
