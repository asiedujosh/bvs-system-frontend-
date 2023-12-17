import axios from "axios"

export const sendMessage = async (tel, sms) => {
  try {
    let responseOnMessage = await axios.get(
      `https://sms.arkesel.com/sms/api?action=send-sms&api_key=RWRFa3pxenNld2hvdlNiTGh0UHU&to=${tel}&from=BVS&sms=${sms}`
    )
    if (responseOnMessage.code === "ok") {
      return responseOnMessage.data
    }
  } catch (err) {
    console.log(err)
  }
}
