<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { CaretSort, Check } from 'radix-icons-svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { tick } from 'svelte';

	export let title: string;
	export let multiple: boolean = false;

	let selectedValues: string[] = [];

	let options = [
		{
			label: 'Open',
			value: 'open'
		},
		{
			label: 'Closed',
			value: 'closed'
		},
		{
			label: 'Draft',
			value: 'draft'
		},
		{
			label: 'Pending',
			value: 'pending'
		},
		{
			label: 'Scheduled',
			value: 'scheduled'
		},
		{
			label: 'Published',
			value: 'published'
		},
		{
			label: 'Archived',
			value: 'archived'
		},
		{
			label: 'Deleted',
			value: 'deleted'
		}
	];

	let open = false;

	// todo: this should re-focus the button that opened the popover:
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	function handleSelect(currentValue: string, triggerId: string) {
		if (!multiple) {
			selectedValues = [currentValue];
			closeAndFocusTrigger(triggerId);
		} else {
			if (Array.isArray(selectedValues) && selectedValues.includes(currentValue)) {
				selectedValues = selectedValues.filter((v) => v !== currentValue);
			} else {
				selectedValues = [...(Array.isArray(selectedValues) ? selectedValues : []), currentValue];
			}
		}
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="outline"
			role="combo-box"
			size="sm"
			class="min-w-5 h-8 border"
		>
			{selectedValues.length > 0 && !multiple ? selectedValues[0] : title}
			<CaretSort class="ml-2 h-4 w-4" />
			{#if selectedValues.length > 0}
				{#if multiple}
					<Separator orientation="vertical" class="mx-2 h-4" />
					<Badge variant="secondary" class="rounded-sm px-1 font-normal sm:hidden">
						{selectedValues.length}
					</Badge>
					<div class="hidden space-x-1 sm:flex">
						{#if selectedValues.length > 3}
							<Badge variant="secondary" class="rounded-sm px-1 font-normal">
								{selectedValues.length} Selected
							</Badge>
						{:else}
							{#each selectedValues as option}
								<Badge variant="secondary" class="rounded-sm px-1 font-normal">{option}</Badge>
							{/each}
						{/if}
					</div>
				{/if}
			{/if}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-[200px] p-0" align="start" side="bottom">
		<Command.Root>
			<Command.Input placeholder={title} />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				<Command.Group>
					{#each options as option}
						<Command.Item
							value={option.value}
							onSelect={(currentValue) => {
								handleSelect(currentValue, ids.trigger);
							}}
						>
							{#if multiple}
								<div
									class={cn(
										'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-gray-900',
										selectedValues.includes(option.value)
											? 'bg-gray-900 text-gray-50'
											: 'opacity-50 [&_svg]:invisible'
									)}
								>
									<Check className={cn('h-4 w-4')} />
								</div>
							{:else}
								<Check
									class={cn(
										'mr-2 h-4 w-4',
										!selectedValues.includes(option.value) && 'text-transparent'
									)}
								/>
							{/if}
							<span>
								{option.label}
							</span>
						</Command.Item>
					{/each}
				</Command.Group>
				{#if selectedValues.length > 0 && multiple}
					<Command.Separator />
					<Command.Item
						class="justify-center text-center"
						onSelect={() => {
							selectedValues = [];
						}}
					>
						Clear selection
					</Command.Item>
				{/if}
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
