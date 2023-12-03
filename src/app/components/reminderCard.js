"use client"
import { ToastContainer, toast } from "react-toastify"
import { ADDCLIENT, CLIENT_OPTIONS } from "@/app/constant/IndividualConstants"
import SubmitBtn from "@/app/components/submitButton"
import CheckboxTable from "@/app/components/checkboxTable"
import "react-toastify/dist/ReactToastify.css"

const ReminderCard = ({ title, clients }) => {
  const handleSubmit = () => {
    console.log("Message sent")
  }

  return (
    <>
      <div>
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg h-1/2">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">{title}</h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full md:w-1/2 lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">Client List</h2>
                <div className="space-y-4">
                  <CheckboxTable data={clients} />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">Message</h2>
                <div className="space-y-4">
                  <div class="p-4">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      class="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-transparent"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                </div>
                <div className="mt-2 min-w-full flex items-center justify-center">
                  <SubmitBtn
                    text={ADDCLIENT.buttonText}
                    submit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default ReminderCard
