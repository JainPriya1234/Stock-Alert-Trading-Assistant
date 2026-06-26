import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="
      w-full
      border-b
      border-zinc-800
      bg-black/80
      backdrop-blur-md
      sticky
      top-0
      z-50
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">

        {/* LEFT SECTION */}
        <div className="
          flex
          items-center
          gap-3
        ">

          <div className="
            w-3
            h-3
            rounded-full
            bg-green-400
          " />

          <h1 className="
            text-2xl
            font-bold
            text-white
          ">
            Stock Alerting
          </h1>

        </div>

        {/* CENTER LINKS */}
        <div className="
          hidden
          md:flex
          items-center
          gap-8
          text-zinc-300
        ">

          <Link
            href="/"
            className="
              hover:text-white
              transition
            "
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="
              hover:text-white
              transition
            "
          >
            Dashboard
          </Link>

          <Link
            href="/alerts"
            className="
              hover:text-white
              transition
            "
          >
            Alerts
          </Link>

          <Link
            href="/pricing"
            className="
              hover:text-white
              transition
            "
          >
            Pricing
          </Link>

        </div>

        {/* RIGHT SECTION */}
        <div className="
          flex
          items-center
          gap-4
        ">

          <button className="
            text-zinc-300
            hover:text-white
            transition
          ">
            Login
          </button>

          <button className="
            bg-white
            text-black
            px-5
            py-2
            rounded-xl
            font-semibold
            hover:scale-105
            transition
          ">
            Get Started
          </button>

        </div>

      </div>

    </nav>

  );
}