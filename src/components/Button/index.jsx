import './button.style.css'

export function Button ({ children, ...rest }) {
    return <Button {...rest} className='btn' >{ children }</Button>
}