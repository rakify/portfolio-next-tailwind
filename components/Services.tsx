import { FC } from "react"
import { Service } from "../utils/interface"

const ServiceCard: FC<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  function createMarkup() {
    return {
      __html: about,
    }
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="w-fit rounded-xl bg-link/5 p-3 text-link dark:bg-link/10 dark:text-link">
        <Icon size={28} />
      </div>
      <div>
        <h6 className="mb-1.5 text-lg font-bold tracking-tight text-gray dark:text-gray-100">
          {title}
        </h6>
        <p
          className="text-[14px] leading-relaxed text-gray/70 dark:text-gray-400"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  )
}

export default ServiceCard
