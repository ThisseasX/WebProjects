<%-- 
    Document   : JSPTest
    Created on : 6 Φεβ 2018, 9:39:53 μμ
    Author     : thiss
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>
            <% if (Math.random() > 0.5) {
               %>Heads<%
            } else {
               %>Tails<%
            } %>
        </h1>
    </body>
</html>
