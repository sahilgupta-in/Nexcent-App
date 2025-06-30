import peopleicon from '../assets/peopleicon.svg'
import buildingicon from '../assets/builicon.svg'
import handicon from '../assets/handicon.svg'


const Community = () => {
  return (
    <div className="text-center pt-16 sm:pt-20 px-4 sm:px-6 md:px-0">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">Manage your entire community <br />in a single system</h1>
      <p className="text-sm md:text-base text-gray-500 mt-4 max-w-xl mx-auto">Who is Nextcent suitable for?</p>
      <div className="flex flex-wrap items-center space-x-0 sm:space-x-4 mt-6 text-gray-500 gap-6 justify-center">
        <div className="p-4 bg-white rounded-lg shadow-sm max-w-xs w-full md:w-auto">
          <img className="rounded-md max-h-20 w-20 mx-auto object-cover" src={peopleicon} alt="officeImage" />
          <p className="text-gray-900 text-xl font-bold ml-0 sm:ml-2 mt-2 ">Membership <br /> Organisations</p>
          <p className="text-gray-500 text-sm my-3 ml-0 sm:ml-2">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm max-w-xs w-full md:w-auto">
          <img className="rounded-md max-h-20 w-20 mx-auto object-cover" src={buildingicon} alt="officeImage" />
          <p className="text-gray-900 text-xl font-bold ml-0 sm:ml-2 mt-2">National <br /> Associations</p>
          <p className="text-gray-500 text-sm my-3 ml-0 sm:ml-2">Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm max-w-xs w-full md:w-auto text-center">
          <img className="rounded-md max-h-20 w-20 mx-auto object-cover" src={handicon} alt="officeImage" />
          <p className="text-gray-900 text-xl font-bold ml-0 sm:ml-2 mt-2">Clubs And  <br /> Groups</p>
          <p className="text-gray-500 text-sm my-3 ml-0 sm:ml-2">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </div>
  )
}

export default Community
