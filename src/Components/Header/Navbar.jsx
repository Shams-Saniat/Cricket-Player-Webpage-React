
// eslint-disable-next-line react/prop-types
export default function Navbar({ selectedProducts, price }) {
    return (
        <div className='mb-6 mt-12'>
            <div className='flex max-w-screen-2xl mx-auto justify-between'>
                {/*Logo Section*/}
                <div>
                    <img src="./src/assets/logo.png" alt="Logo" className="h-15 w-auto" />
                </div>
                {/*Navigation Section*/}
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li className="hover:text-black cursor-pointer">Home</li>
                    <li className="hover:text-black cursor-pointer">Fixture</li>
                    <li className="hover:text-black cursor-pointer">Teams</li>
                    <li className="hover:text-black cursor-pointer">Schedules</li>
                    <button className="btn">Button {selectedProducts}</button>
                </ul>

                {/* <ul className='flex space-x-6 list-none'>
                    <li className='item text-gray-500'>Home</li>
                    <li className='item text-gray-500'>Fixture</li>
                    <li className='item text-gray-500'>Teams</li>
                    <li className='item text-gray-500'>Schedules</li>
                    <button className="btn">Button {selectedProducts}</button>
                </ul> */}
            </div>
        </div>
    )
}



