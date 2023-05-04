import { ReactNode } from "react"

type ContentProps = {
  children?: ReactNode;
  mainContainerClass?: string; 
}

export function Content ({ children, mainContainerClass }: ContentProps) {
  const mainContainerClassName = mainContainerClass ? mainContainerClass : 'content container-grid'
  return (
    <div className='w-100 pb-5'>
      <main id='main' role='main' className={mainContainerClassName}>
        {children}
      </main>
    </div>
  )
}
