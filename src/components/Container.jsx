

const Container = ({ children }) => {
    return (
        <main >
            <div className="flex justify-center items-center my-6 px-6 w-full max-w-7xl">
                <div className='w-full max-w-7xl border border-stone-200 rounded-md px-6 py-12 flex justify-center'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Container
