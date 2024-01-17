function openTab(event, tabName) {
    // Hide all tab contents and remove 'active' class from tabs
    const tabContents = document.getElementsByClassName('tab-content');
    for (const tabContent of tabContents) {
      tabContent.style.display = 'none';
    }

    const tabs = document.getElementsByClassName('tab');
    for (const tab of tabs) {
      tab.classList.remove('active');
    }

    // Show the selected tab content and mark the tab as active
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
  }