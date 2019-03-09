package com.revature.pokemonv2.service;

import java.io.IOException;
import java.security.Key;
import java.security.KeyPair;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.UnrecoverableKeyException;
import java.security.cert.Certificate;
import java.security.cert.CertificateException;
import java.util.Date;
import java.util.UUID;
import com.revature.pokemonv2.model.Trainer;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class TokenService {

	// How long the token generated is going to last
	private static final long TOKEN_EXPIRY = 1000 * 60 * 15; //15 Minutes
	// A private instance of the class
	private static final TokenService instance = new TokenService();
	// Generates a public and private key
	private final KeyPair keyPair;

	// Private constructor
	private TokenService() {
		try {
			KeyStore keyStore = KeyStore.getInstance("pkcs12");
			//Loads the .jks file with JWTs
			keyStore.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("jwt.jks"),"Password123!".toCharArray());
			//Gets the private keys
			Key key = keyStore.getKey("jwt", "Password123!".toCharArray());
			if (key instanceof PrivateKey) {
				// Get the certificate
				Certificate cert = keyStore.getCertificate("jwt");
				
				// Get Public Key
				PublicKey pubKey = cert.getPublicKey();
				this.keyPair = new KeyPair(pubKey, (PrivateKey) key);
			} else {
				//TODO
				throw new IOException("Failed to read KeyStore");
			}
		} catch (KeyStoreException | NoSuchAlgorithmException | CertificateException | IOException | UnrecoverableKeyException e) {
			//TODO
			throw new RuntimeException(e);
		}
	}

	// Returns instance of the class
	public static final TokenService getInstance() {
		return instance;
	}

	// When a user logins it generates a token
	public String generateToken(Trainer details) {
		// No details given
		if (details == null)
			throw new IllegalArgumentException("User details must not be null");
		// Get a new date
		final Date now = new Date();
		// Generate a new UUID
		final String jti = UUID.randomUUID().toString();
		// Encrypt the ID with different parameters
		return Jwts.builder().signWith(keyPair.getPrivate(), SignatureAlgorithm.RS256)
				// Encrypt the trainer user name
				.setSubject(details.getUsername())
				// Encrypt the trainer score/credits
				.claim("userID", details.getUserID())
				.claim("score", details.getScore())
				.claim("credit", details.getCredits())
				// Set when token is issued
				.setIssuedAt(now)
				// When it expires
				.setExpiration(new Date(now.getTime() + TOKEN_EXPIRY))
				// Token id
				.setId(jti).compact();
	}

	// Validates the token
	public boolean validateToken(String token) {
		try {
			Jwts.parser().setSigningKey(keyPair.getPublic()).parseClaimsJws(token);
			return true;
		} catch (Exception e) {
			// TODO
		}
		return false;
	}

	// Gets the Trainer user name, credit, userID, and score from token
	public Trainer getUserDetailsFromToken(String token) {
		if (token != null && token.startsWith("Bearer ")) {
			Claims claims = Jwts.parser().setSigningKey(keyPair.getPublic())
					.parseClaimsJws(token.replace("Bearer ", "")).getBody();
			Trainer authenticated = new Trainer();
			authenticated.setUsername(claims.getSubject());
			authenticated.setCredits((int) claims.get("credit"));
			authenticated.setUserID((int) claims.get("userID"));
			authenticated.setScore((int) claims.get("score"));
			return authenticated;
		}
		return null;
	}

	// Returns the token ID
	public String getTokenId(String token) {
		if (token != null && token.startsWith("Bearer ")) {
			Claims claims = Jwts.parser().setSigningKey(keyPair.getPublic())
					.parseClaimsJws(token.replace("Bearer ", "")).getBody();
			return claims.getId();
		}
		return null;
	}

}
