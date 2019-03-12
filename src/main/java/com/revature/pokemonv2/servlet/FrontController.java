package com.revature.pokemonv2.servlet;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.pokemonv2.utilities.CachingUtility;
import org.apache.catalina.servlets.DefaultServlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.pokemonv2.dispatcher.MasterDispatcher;
import com.revature.pokemonv2.service.LeaderBoardService;

/**
 * The Front Controller class contains all the methods to handle servlet
 * interaction. I contains RESTFul end points such as GET, POST, PUT, and DELETE
 */
@MultipartConfig(maxRequestSize = 1024 * 1024 * 100)
public class FrontController extends DefaultServlet {
	private static final long serialVersionUID = 4826138980180601133L;
	private static String[] ngRoutes = {
			"landing",
			"login",
			"register",
			"generate",
			"collection",
			"landing",
			"shop",
			"redeem"
	};

	@Override
	public void init() throws ServletException {
		super.init();
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		final ObjectMapper mapper = new ObjectMapper();
		String uri = request.getRequestURI();
		
		if (uri.contains("/servlet/"))
			MasterDispatcher.process(request, response);
		else if (uri.equals("/PokemonCollector") || uri.equals("/PokemonCollector/"))
			response.sendRedirect("/PokemonCollector/ng/index.html");
		else if ((uri.contains("/ng/") && Arrays.asList(ngRoutes).stream().anyMatch(route -> uri.contains(route))))
			request.getRequestDispatcher("/ng/index.html").forward(request, response);
		else if (uri.equals("/PokemonCollector/ng/leaderboard"))
			mapper.writeValue(response.getOutputStream(),LeaderBoardService.getLeaderBoardService().returnLeaderBoard(request, response));
		else if (uri.equals("/PokemonCollector/ng/stats"))
			mapper.writeValue(response.getOutputStream(),LeaderBoardService.getLeaderBoardService().returngetPokemonCountByTrainer(request, response));
		
		else {
			switch (request.getMethod()) {
			case "GET":
				super.doGet(request, response);
				break;
			case "POST":
				super.doPost(request, response);
				break;
			case "PUT":
				super.doPut(request, response);
				break;
			case "DELETE":
				super.doDelete(request, response);
				break;
			}
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	@Override
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
}
