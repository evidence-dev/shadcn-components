<script lang="ts">
	import { Calendar as CalendarIcon } from 'radix-icons-svelte';
	import type { DateRange } from 'bits-ui';
	import {
		CalendarDate,
		DateFormatter,
		getLocalTimeZone,
		today,
		startOfMonth,
		endOfMonth,
		startOfWeek,
		startOfYear,
		type DateValue
	} from '@internationalized/date';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { RangeCalendar } from '$lib/components/ui/range-calendar';
	import * as Select from '$lib/components/ui/select';
	import * as Popover from '$lib/components/ui/popover';

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});

	let selectedDateRange: DateRange | undefined = {
		start: today(getLocalTimeZone()),
		end: today(getLocalTimeZone())
	};

	let startValue: DateValue | undefined = undefined;

	type Preset = {
		label: string;
		range: DateRange;
	};

	const presets: Array<Preset> = [
		{
			label: 'Last 7 Days',
			range: {
				start: today(getLocalTimeZone()).subtract({ days: 7 }),
				end: today(getLocalTimeZone())
			}
		},
		{
			label: 'Last 12 Months',
			range: {
				start: startOfMonth(today(getLocalTimeZone()).subtract({ months: 12 })),
				end: endOfMonth(today(getLocalTimeZone()).subtract({ months: 1 }))
			}
		}
	];
</script>

<Popover.Root openFocus>
	<Popover.Trigger asChild let:builder>
		<Button
			variant="outline"
			class={cn(
				'justify-start text-left font-normal',
				!selectedDateRange && 'text-muted-foreground'
			)}
			builders={[builder]}
		>
			<CalendarIcon class="mr-2 h-4 w-4" />
			{#if selectedDateRange && selectedDateRange.start}
				{#if selectedDateRange.end}
					{df.format(selectedDateRange.start.toDate(getLocalTimeZone()))} - {df.format(
						selectedDateRange.end.toDate(getLocalTimeZone())
					)}
				{:else}
					{df.format(selectedDateRange.start.toDate(getLocalTimeZone()))}
				{/if}
			{:else if startValue}
				{df.format(startValue.toDate(getLocalTimeZone()))}
			{:else}
				Date Range
			{/if}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-auto select-none p-2" align="start">
		<Select.Root
			onSelectedChange={(v) => {
				if (!v) return;
				// console.log(presets.filter((presets) => presets.label == v.value)[0].range);
				// console.log(selectedDateRange);
				selectedDateRange = presets.filter((presets) => presets.label == v.value.label)[0].range;
			}}
		>
			<Select.Trigger>
				<Select.Value placeholder="Select" />
			</Select.Trigger>
			<Select.Content>
				{#each presets as preset}
					<Select.Item value={preset}>{preset.label}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
		<RangeCalendar bind:value={selectedDateRange} initialFocus numberOfMonths={1} />
	</Popover.Content>
</Popover.Root>
