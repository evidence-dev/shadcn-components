<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group';

	const presets = [
		{
			label: '1D',

			value: '1D'
		},
		{
			label: '1W',
			value: '1W'
		},
		{
			label: '1M',
			value: '1M'
		},
		{
			label: '3M',
			value: '3M'
		},
		{
			label: '6M',
			value: '6M'
		},
		{
			label: 'YTD',
			value: 'YTD'
		},
		{
			label: '1Y',
			value: '1Y'
		},
		{
			label: '2Y',
			value: '2Y'
		},
		{
			label: '3Y',
			value: '3Y'
		},
		{
			label: '5Y',
			value: '5Y'
		},
		{
			label: '10Y',
			value: '10Y'
		},
		{
			label: 'All',
			value: 'All'
		}
	];
</script>

<ToggleGroup.Root type="single" size="sm" class="my-4 justify-between overflow-auto border-t p-1">
	{#each presets as preset}
		<ToggleGroup.Item value={preset.value} aria-label={preset.label}>
			{preset.label}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
