const Footer = () => {
    return (
        <footer className="border-2 border-blue-400 w-full max-w-5xl my-4 mx-auto mb-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-lg rounded-lg p-4">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0 text-center">
                <p>Powered by  <a className="hover:underline font-bold"
                    target="blank"
                    href="https://restcountries.com/">Rest Countries</a> and <a className="hover:underline font-bold"
                    target="blank"
                    href="https://openweathermap.org/api">OpenWeather</a>.
                </p>
                <p>Made by <a className="hover:underline font-bold"
                    target="blank"
                    href="https://github.com/urwah1248">@urwah1248</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;