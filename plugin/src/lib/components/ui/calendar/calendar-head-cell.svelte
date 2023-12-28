<script lang="ts">
	import { Calendar as CalendarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = CalendarPrimitive.HeadCellProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<CalendarPrimitive.HeadCell
	class={cn('w-8 rounded-md text-[0.8rem] font-normal text-gray-500', className)}
	{...$$restProps}
>
	<slot />
</CalendarPrimitive.HeadCell>
