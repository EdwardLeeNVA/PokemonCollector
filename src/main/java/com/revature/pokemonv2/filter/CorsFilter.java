package com.revature.pokemonv2.filter;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Handles CORS filters
 */
public class CorsFilter implements Filter {
	
	private static final Logger LOGGER = Logger.getLogger(CorsFilter.class);
	
	/**
	 * CORS Filter constructor
	 */
    public CorsFilter() {
    }
    /**
     * Destroy method occurs on shutdown
     */
	public void destroy() {
	}
	
	/**
	 * Adds headers to the request to get around CORS.
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		LOGGER.info(httpRequest.getMethod() + " request going to " + httpRequest.getRequestURI());
		
		// In order for us to accept requests from other domains, we need to add two request headers
		// First being, 'Access-Control-Allow-Origin' with the value being the domain you are requesting from
		httpResponse.addHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		
		// The second being, 'Access-Control-Allow-Methods' with the HTTP Methods you grant access to
		httpResponse.addHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
		httpResponse.addHeader("Access-Control-Allow-Credentials", "true");
		httpResponse.addHeader("Access-Control-Request-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Credentials");
		httpResponse.addHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Credentials");
		
		if (httpRequest.getMethod().equalsIgnoreCase("OPTIONS")) {
			httpResponse.setStatus(HttpServletResponse.SC_OK);
			return;
		}
		
		// pass the request along the filter chain
		chain.doFilter(httpRequest, httpResponse);
	}
	
	/**
	 * Initialize method.
	 */
	public void init(FilterConfig fConfig) throws ServletException {
	}
}
