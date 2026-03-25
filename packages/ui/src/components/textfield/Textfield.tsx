import React from 'react'
import { containerVariants, inputVariants } from './textfield.variants'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'
import type { IconType } from 'react-icons';

type ContainerVariants = VariantProps<typeof containerVariants>

type InputVariants = VariantProps<typeof inputVariants>

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    isError?: ContainerVariants['isError'];
    prefixIcon?: IconType;
}
const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
    (
        {
            className,
            isError = false,
            prefixIcon: PrefixIcon,
            ...props
        },
        ref
    ) => {
        return (
            <div
                className={
                    cn(containerVariants({
                        isError
                    }),
                        className
                    )}
            >
                {
                    PrefixIcon && (
                        <div className="h-full ps-3 pe-2 text-gray-400">
                            <PrefixIcon size={14} />
                        </div>
                    )
                }
                <input ref={ref} className={cn(
                    inputVariants({
                        isError: isError,
                    })
                )}
                    {...props} />
            </div>
        )
    }
)

export default Textfield