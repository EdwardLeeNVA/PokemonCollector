package com.revature.pokemonv2.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	private static final ObjectMapper mapper = new ObjectMapper();


	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String uri = request.getRequestURI();

		if (uri.contains("/servlet/"))
			MasterDispatcher.process(request, response);
		else if (uri.equals("/PokemonCollector/ng") || uri.equals("/PokemonCollector/ng/"))
			response.sendRedirect("/PokemonCollector/ng/index.html");
		else if (uri.equals("/PokemonCollector/ng/leaderboard"))
			mapper.writeValue(response.getOutputStream(),LeaderBoardService.getLeaderBoardService().returnLeaderBoard(request, response));
		else if (uri.equals("/PokemonCollector/ng/stats"))
			mapper.writeValue(response.getOutputStream(),LeaderBoardService.getLeaderBoardService().returngetPokemonCountByTrainer(request, response));
		else
			super.doGet(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String uri = request.getRequestURI();

		if (uri.contains("/servlet/"))
			MasterDispatcher.process(request, response);
		else
			super.doPost(request, response);
	}

	@Override
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String uri = request.getRequestURI();

		if (uri.contains("/servlet/"))
			MasterDispatcher.process(request, response);
		else
			super.doPut(request, response);
	}

	@Override
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String uri = request.getRequestURI();

		if (uri.contains("/servlet/"))
			MasterDispatcher.process(request, response);
		else
			super.doDelete(request, response);
	}
}
