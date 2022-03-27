<template>
    <div>
        <form id="search-bar">
        <input id="search-input" name="search" type="text" size="75" placeholder="Enter a page name (e.g. &quot;Damage&quot; without quotation marks)">
        <button id="search-button" type="button">Submit ✔️</button>
        </form>
        <button id="edit-button" type="button"><a id="edit-button-link" target="_blank" rel="noopener noreferrer" title="Open link in new tab">Edit on the wiki</a></button>
        <button id="history-button" type="button"><a id="history-button-link" target="_blank" rel="noopener noreferrer" title="Open link in new tab">Page history on wiki</a></button>
        <button id="wiki-button" type="button"><a id="wiki-button-link" target="_blank" rel="noopener noreferrer" title="Open link in new tab">See page on the wiki</a></button>
        <div style="text-align: right; padding-right: 5%">
            ⏲️ Page fetch time: <span id="elapsed-time">N/A</span><br />
        <!--💾 Content size: <span id="article-size">N/A</span>-->
        </div>
    </div>
</template>
