<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	export let buttonText: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}
		>{buttonText ?? 'Open'}
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>{title ?? ''}</Dialog.Title>
		</Dialog.Header>
		<div class="overflow-auto">
			<slot />
		</div>
	</Dialog.Content>
</Dialog.Root>
