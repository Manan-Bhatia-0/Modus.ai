#!/usr/bin/env python
# coding: utf-8

# In[1]:


from mood_analysis import MoodAnalysis


# In[2]:


class JournalEntry:
    
    def __init__(self, username, title, entry, date_created, status):
        self.username = username
        #self.jid = '' (add as init param)
        self.title = title
        self.entry = entry
        self.date_created = date_created
        self.status = status
        self.t2e_entry_mood_analysis = {}
        self.t2e_sent_mood_analysis = []
        self.polarity_entry_mood_analysis = {}
        self.polarity_sent_mood_analysis = []
    
    def set_username(self, new_username):
        self.username = new_username
        
    def get_username(self):
        return self.username
        
    #def set_jid(self): (in progress)
        
    
    #def get_jid(self): (in progress)
        
    
    def set_title(self, new_title):
        self.title = new_title
        
    def get_title(self):
        return self.title
    
    def set_entry(self, new_entry):
        self.entry = new_entry
        
    def get_entry(self):
        return self.entry
        
    def get_date_created(self):
        return self.date_created
        
    def t2e_set_entry_mood_analysis(self):
        self.t2e_entry_mood_analysis = MoodAnalysis.t2e_entry_analysis(self.entry)
    
    def t2e_get_entry_mood_analysis(self):
        return self.t2e_entry_mood_analysis
        
    def t2e_set_sent_mood_analysis(self):
        self.t2e_sent_mood_analysis = MoodAnalysis.t2e_sent_analysis(self.entry)
    
    def t2e_get_sent_mood_analysis(self):
        return self.t2e_sent_mood_analysis
    
    def polarity_set_entry_mood_analysis(self):
        self.polarity_entry_mood_analysis = MoodAnalysis.polarity_entry_analysis(self.entry)
        
    def polarity_get_entry_mood_analysis(self):
        return self.polarity_entry_mood_analysis
    
    def polarity_set_sent_mood_analysis(self):
        self.polarity_sent_mood_analysis = MoodAnalysis.polarity_sent_analysis(self.entry)
        
    def polarity_get_sent_mood_analysis(self):    
        return self.polarity_sent_mood_analysis


# In[ ]:




