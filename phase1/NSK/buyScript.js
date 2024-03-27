document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accountNo = urlParams.get('accountNo')
    const sellerId = urlParams.get('sellerId')
    const itemNo = urlParams.get('itemNo');
});