<script lang="ts">
	import { Command as CommandPrimitive } from 'cmdk-sv';
	import { cn } from '$lib/utils';

	type $$Props = CommandPrimitive.CommandProps;

	export let value: $$Props['value'] = undefined;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<CommandPrimitive.Root
	class={cn(
		'bg-popover flex h-full w-full flex-col overflow-hidden rounded-md text-gray-900',
		className
	)}
	bind:value
	{...$$restProps}
>
	<slot />
</CommandPrimitive.Root>
