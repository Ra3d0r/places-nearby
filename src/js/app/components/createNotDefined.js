function createNotDefined() {
	const toast = document.createElement('h2');
	toast.textContent = 'Nothing found...';
	toast.style.fontFamily = 'Inter';
	toast.style.fontWeight = '500';
	toast.style.color = 'var(--color-font)';
	toast.style.fontSize = '2rem';
	toast.style.textAlign = 'center';
	return toast;
}
