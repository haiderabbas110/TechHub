import Image from "@/node_modules/next/image"

const Logo = () => {

    return (
        <Image
        src="/admin-assets/logo.png"
        alt="Gyan"
        className="dark:invert"
        width={211}
        height={97}
        priority
      />
    )
}

export default Logo