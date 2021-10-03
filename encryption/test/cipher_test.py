import unittest

from encryption.cipher import Cipher


class TestEncryption(unittest.TestCase):

    def test_text_cipher(self):
        with open("./test_1") as f1:
            original_text1 = f1.readlines()
        formatted_text1 = self.format_text(original_text1)

        test_cipher1 = Cipher(formatted_text1)
        encrypted_text = test_cipher1.encrypt_text()
        decrypted_text = test_cipher1.decrypt_text(encrypted_text)

        self.assertEqual(decrypted_text, formatted_text1)

        with open("./test_2") as f2:
            original_text2 = f2.readlines()
        formatted_text2 = self.format_text(original_text2)
        test_cipher2 = Cipher(formatted_text2)
        encrypted_text = test_cipher2.encrypt_text()
        decrypted_text = test_cipher2.decrypt_text(encrypted_text)

        self.assertEqual(decrypted_text, formatted_text2)

    def test_image_cipher(self):
        path_to_original_image = r"~/Desktop/Purdue/Junior Year/CS 307/CS307_project/encryption/test/fluff.jpg"
        path_to_store_image = r"~/Desktop/Purdue/Junior Year/CS 307/CS307_project/encryption/test/encrypted_fluff.jpg"
        key = 234567
        Cipher.image_cipher(path_to_original_image, path_to_store_image, key)


    def format_text(self, original_text):
        formatted_text = ' '.join(original_text)
        formatted_text = Cipher.format_text(formatted_text)
        return formatted_text


if __name__ == '__main__':
    unittest.main()
