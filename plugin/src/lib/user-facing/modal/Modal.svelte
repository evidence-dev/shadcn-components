<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	export let buttonText: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}
		>{buttonText ?? 'Open'}
	</Dialog.Trigger>
	<Dialog.Content class="mx-4 h-3/4">
		<Dialog.Header>
			<Dialog.Title>{title ?? ''}</Dialog.Title>
		</Dialog.Header>
		<div class="overflow-auto">
			<slot />
		</div>
	</Dialog.Content>
</Dialog.Root>
