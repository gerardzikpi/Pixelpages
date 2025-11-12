export default function Header(){
    return(
        <>
            <header className="d-flex flex-col">
                <h1 className="text-blue-700">PixelPages</h1>
                <div className='allign-items-end justify-end'>
                    <p>Notifications</p>
                    <div className="rounded-full bg-gray-400">
                        <i className="bi bi-person"/>
                    </div>
                </div>
            </header>
        </>
    )
}