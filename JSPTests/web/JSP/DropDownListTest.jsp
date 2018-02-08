<%-- 
    Document   : JSPTest3
    Created on : 8 Φεβ 2018, 6:26:34 μμ
    Author     : thiss
--%>

<%@page import="java.util.Arrays"%>
<%@page import="java.lang.String"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Please select an item</h1>
        <select>
            <%
                List<String> list = new ArrayList<>(Arrays.asList(
                        "One",
                        "Two",
                        "Three",
                        "Four",
                        "Five")
                );
                for (String s : list) {
            %>
            <option value="<%=s%>">
                <%=s%>
            </option>
            <%
                }
            %>
        </select>
    </body>
</html>
