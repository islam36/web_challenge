const Button = ({type, children, className, ...rest}) => {
    const types = {
        'primary': 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer',
        'secondary': 'bg-transparent text-blue-500 border-2 border-blue-500 cursor-pointer',
        'disable': 'bg-blue-200 text-white cursor-default',
    };

    const typeClass = types[type] != null ? types[type] : 'primary';

    return (
        <button
            className={`text-base py-2 px-8 ${typeClass} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;