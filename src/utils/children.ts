/**
 * Old-school filtering of React element in the `children` prop.
 */
import  { Children, ReactNode, ReactElement }  from 'react'

export function filterChildren (children: ReactNode, predicate : (el: ReactElement) => boolean) {
  return Children.toArray(children).filter(predicate)
}

export function pickFirst (children: ReactNode, predicate : (el: ReactElement) => boolean) {
  return filterChildren(children, predicate)[0]
}

/**
 * @return The children of the first element for which `predicate` returns true.
 *
 * This is to implement a “pick and remove” pattern, e.g. to use as Vue-style named slots.
 */
export function pickChildrenOfFirst (children: ReactNode, predicate : (el: ReactElement) => boolean) {
  const firstChild = pickFirst(children, predicate) as ReactElement
  return firstChild ? firstChild.props.children : undefined
}
