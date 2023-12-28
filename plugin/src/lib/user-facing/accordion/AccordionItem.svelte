<script>
	import * as BaseAccordion from '$lib/components/ui/accordion';
	export let title = '';
</script>

<!-- todo: two items with the same title will open together, value should be enumerated  -->

<BaseAccordion.Item value={title}>
	<BaseAccordion.Trigger>
		{title}
	</BaseAccordion.Trigger>
	<BaseAccordion.Content>
		<slot />
	</BaseAccordion.Content>
</BaseAccordion.Item>
