package com.asdc.payroll_management.Utility;

import static org.junit.Assert.fail;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.asdc.payroll_management.UserAuthentication.UserAuthentication;

class EncryptionDecriptionTest {
	EncryptionDecription testObject = new EncryptionDecription();
	@Test
	void testEncryptionDecriptionExist() {
		try {
			Class classObject = Class.forName("com.asdc.payroll_management.Utility.EncryptionDecription");
			assertNotNull(classObject);
		} catch (ClassNotFoundException e) {
			fail("class not exists");
		}
	}
	@Test
	public void testGetCipherText() {
		try {
			String CipherText="";
			CipherText = testObject.GetCipherText("KR");
			assertEquals("���+R:��?�n�@", CipherText);
			CipherText = testObject.GetCipherText("Hello");
			assertNotEquals("���+R:��?�n�@", CipherText);
			assertNotNull("���+R:��?�n�@", CipherText);
		}
		catch(Exception e)
		{
			fail();
		}
	}
}
