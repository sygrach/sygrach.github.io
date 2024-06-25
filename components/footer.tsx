export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 lg:py-24">
      <div className="flex flex-col justify-center items-center px-6 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5 flex items-center justify-center">
          <img
            className="h-10 w-auto"
            src="/logo_sygrach.png"
            alt="Сыграч"
          />
        </a>
        <p className="mt-8 text-gray-600">© 2024 Все права защищены.</p>
      </div>
    </div>
  )
}
