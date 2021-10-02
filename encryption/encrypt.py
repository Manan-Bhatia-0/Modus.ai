import pandas as pd


class Cipher:

    def __init__(self, journal_entry):
        self.journal_entry = journal_entry
        self.key = pd.read_csv(r"~/Desktop/Purdue/Junior Year/CS "
                               r"307/CS307_project/encryption/keyDecoder/keyDecoder.csv",
                               sep=',', names=['Character', 'Byte'], header=None, skiprows=[0])

        self.df = pd.DataFrame(data=self.key)

        self.df['Character'] = self.df['Character'].astype(str)
        self.df['Byte'] = self.df['Byte'].astype(str)

    def encrypt_entry(self):
        journal_entry_formatted = self.format_text(self.journal_entry)
        text = self.split(journal_entry_formatted)
        encrypted_text = self.encode(text)
        return encrypted_text

    @staticmethod
    def split(message):
        return [char for char in message]

    def encode(self, text):
        encoded_text = ""
        for i in range(len(text)):
            j = text[i]
            try:
                encoded_char = self.key.loc[self.key['Character'] == j, 'Byte'].iloc[0]
            except:
                print('illegal character')
                encoded_char = '$$$'

            encoded_text += encoded_char
        return encoded_text

    def decrypt_entry(self, encrypted_text):
        new_word = ''
        original_text = []

        for i in range(0, len(encrypted_text), 2):
            j = encrypted_text[i:i + 2]
            index = self.df[self.df.eq(j).any(1)]

            df2 = index['Character'].tolist()

            s = [str(x) for x in df2]
            original_text += s

        new_word = ''.join(original_text)

        return new_word

    @staticmethod
    def format_text(original_text):
        formatted_text = original_text.replace('\n', '')
        formatted_text = formatted_text.replace('’', '\'')
        formatted_text = formatted_text.replace('“', '\"')
        formatted_text = formatted_text.replace('”', '\"')
        return formatted_text
