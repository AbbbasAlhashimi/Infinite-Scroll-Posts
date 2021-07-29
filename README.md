# Infinite-Scroll-Posts<br>
Fetching data using from a JSON API into a scrollable Post using Vanilla JS<br>
The script begins with selecting elements from the DOM, this involve: posts-container, loader, and filter. The initial sample JSON data will be fetched from the jsonplaceholder <b>Sample API</b>. The passed query will return constant post limit per page. Every page will show three posts, but when the user scroll down; the more posts will be fetched.<br>
The Script consists of 2 <b>Async</b> Functions that fetch data from the API and 2 functions that passes them into the <b>DOM</b>, and an <b>EventListener</b>.<br> The Functions are as follows:
<ul>
  <li><p style="font-size:1.2em;">getPosts()</p><b>Asynch </b>
  
  The function Fetch Posts from the API using <b>HTTP Requests</b>, and assign limit and page filter using pre-identified variables.
  
  </li>
  <li><p style="font-size:1.2em;">showPosts()</p><b>Asynch </b>
  
  Show Posts into the DOM looping through posts and for each post, two divisions will be created: Post ID, and Post Info (Title,Body). Then appebd them into the DOM. using the Document object element (CreateElement).
  
  </li>
  <li><p style="font-size:1.2em;">showLoading()</p><b>DOM </b>
  
  The function will Show Loader & Fetch More Posts. Along with every post created, the 3 loading circles will disappear gradually as the Timeout and temporarily stop the <b>HTTP Requests</b>.
  
  </li>
  <li><p style="font-size:1.2em;">filterPosts(e)</p><b>DOM </b>
  
  The function will return the DOM parameters using the input box entry then display them into the <b>FLEX</b> and sort them by index.
  
  </li>
  
</u> <p>

As for the <b>EventListener </b>, whenever the mouse is scrolled down the page, the fetched data from the API, will be displayed within a constant value of 3 posts per page. </p>

<p>The Code Implementation can be found here [https://codepen.io/abbbas_alhashimi/pen/wvdmgyQ].</p>
