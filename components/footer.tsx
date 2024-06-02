export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
      <div className="flex flex-col justify-center items-center px-6 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5 flex items-center justify-center">
          <img
            className="h-8 w-auto"
            src="/sygrach/logo.svg"
            alt=""
          />
          <span className="text-2xl font-medium pl-2">Сыграч</span>
        </a>
        <p className="mt-8">© 2024 All rights reserved.</p>
      </div>
    </div>
  )
}
