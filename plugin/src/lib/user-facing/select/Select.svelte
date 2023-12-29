<script lang="ts">
	import { PlusCircled, Check } from 'radix-icons-svelte';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	export let title: string;

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

	const handleSelect = (currentValue: string) => {
		if (Array.isArray(selectedValues) && selectedValues.includes(currentValue)) {
			selectedValues = selectedValues.filter((v) => v !== currentValue);
		} else {
			selectedValues = [...(Array.isArray(selectedValues) ? selectedValues : []), currentValue];
		}
	};
</script>

<Popover.Root bind:open>
	<Popover.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="sm" class="h-8 border">
			<PlusCircled class="mr-2 h-4 w-4" />
			{title}

			{#if selectedValues.length > 0}
				<Separator orientation="vertical" class="mx-2 h-4" />
				<Badge variant="secondary" class="rounded-sm px-1 font-normal lg:hidden">
					{selectedValues.length}
				</Badge>
				<div class="hidden space-x-1 lg:flex">
					{#if selectedValues.length > 2}
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
								handleSelect(currentValue);
							}}
						>
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
							<span>
								{option.label}
							</span>
						</Command.Item>
					{/each}
				</Command.Group>
				{#if selectedValues.length > 0}
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
