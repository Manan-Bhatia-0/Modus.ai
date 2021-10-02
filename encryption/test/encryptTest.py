import unittest

from encryption.encrypt import Cipher


class TestEncrytion(unittest.TestCase):

    def test_cipher(self):
        with open("./test_1") as f:
            text = f.readlines()
        original_text = ' '.join(text)
        original_text = original_text.replace('\n', '')
        original_text = original_text.replace('’', '\'')

        test_cipher = Cipher(original_text)
        encrypted_text = test_cipher.encrypt_entry()
        decrypted_text = test_cipher.decrypt_entry(encrypted_text)
        print("encrypted " + encrypted_text+'\n')
        print("decrypted " + decrypted_text + '\n')
        print("original " + original_text)

        self.assertEqual(decrypted_text, original_text)


if __name__ == '__main__':
    unittest.main()
