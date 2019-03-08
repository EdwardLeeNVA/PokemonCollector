package com.revature.pokemonv2.utilities;

import static org.junit.Assert.fail;

import org.junit.Test;



public class PokedexLoadWriterTest {
	
	public PokedexLoadWriter plw = new PokedexLoadWriter();
	

	@Test
	public void test() {
		fail("Not yet implemented");
	}
	
	
	@Test
	public void testLoad() {
		try {
			plw.load("username");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}

/*
 * private static User test = new User(-1, "JUnitTest", "JUnitTest", "JUnitTest@gmail.com", "firstName", "lastName");
	private static UserDAO dao = UserDAOImpl.getUserDAO();
	
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		//ConnectionUtil.defaultCredentials();
		//dao.insertCredentials(test.getUsername(), test.getPassword());
		//dao.grantDBPermissions(test.getUsername());
		//test = dao.insertUser(test);
		//assertNotNull(test);
	}
	

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		test = dao.deleteUser(test);
		//dao.revokeDBPermissions(test.getUsername());
		//dao.deleteCredentials(test.getUsername());
		assertNotNull(test);
	}
	
	@Test
	public void testUpdatePlayer() {
		User returned;
		test.setPassword("newPassword");
		test.setEmail("newEmail@gmail.com");
		test.setFirstName("newFirstName");
		test.setLastName("newLastName");
		// returned will contain hashed password
		returned = dao.updateUser(test);
		// update our test to have the same hashed password
		test.setPassword(dao.hashPassword(test.getUsername(), test.getPassword()));
		assertTrue(test.equals(returned));
	}
 */
