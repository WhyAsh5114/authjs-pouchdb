<script lang="ts">
	import { page } from '$app/stores';
</script>

<p>Protected page accessed!</p>
Username: <b>{$page.data.session?.user?.name}</b>
