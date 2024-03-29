import Root from './toggle.svelte';
import { tv, type VariantProps } from 'tailwind-variants';

export const toggleVariants = tv({
	base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900',
	variants: {
		variant: {
			default: 'bg-transparent',
			outline:
				'border border-gray-200 bg-transparent shadow-sm hover:bg-gray-100 hover:text-gray-900'
		},
		size: {
			default: 'h-9 px-3',
			sm: 'h-8 px-2',
			lg: 'h-10 px-3'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

export type Variant = VariantProps<typeof toggleVariants>['variant'];
export type Size = VariantProps<typeof toggleVariants>['size'];

export {
	Root,
	//
	Root as Toggle
};
