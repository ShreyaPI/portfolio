import math

class TFIDF:
    def __init__(self):
        self.index = {}  # Inverted index: term -> [(doc_id, term_count, metadata)]
        self.doc_lengths = {}  # Total terms per document
        self.doc_count = 0  # Total number of documents

    def add_document(self, doc_id, content, metadata=None):
        """Index a document and compute term frequencies."""
        self.doc_count += 1
        terms = content.lower().split()
        self.doc_lengths[doc_id] = len(terms)
        term_counts = {}
        
        # Count term frequencies
        for term in terms:
            term_counts[term] = term_counts.get(term, 0) + 1
        
        # Update inverted index
        for term, count in term_counts.items():
            if term not in self.index:
                self.index[term] = []
            self.index[term].append((doc_id, count, metadata or {}))

    def compute_tfidf(self, query):
        """Compute TF-IDF scores for documents matching the query."""
        query_terms = query.lower().split()
        scores = {}
        
        for term in query_terms:
            if term in self.index:
                # IDF = log(N / df(t))
                idf = math.log(self.doc_count / len(self.index[term]))
                for doc_id, term_count, metadata in self.index[term]:
                    # TF = term_count / doc_length
                    tf = term_count / self.doc_lengths[doc_id]
                    # TF-IDF score
                    score = tf * idf
                    if doc_id not in scores:
                        scores[doc_id] = {'score': 0, 'metadata': metadata}
                    scores[doc_id]['score'] += score
        
        # Sort documents by score
        return sorted(scores.items(), key=lambda x: x[1]['score'], reverse=True)

# Example usage
if __name__ == "__main__":
    tfidf = TFIDF()
    # Sample documents
    tfidf.add_document(1, "budget report 2025 budget", {"type": "pdf", "path": "/docs/budget.pdf"})
    tfidf.add_document(2, "project plan budget", {"type": "docx", "path": "/docs/plan.docx"})
    tfidf.add_document(3, "meeting notes", {"type": "txt", "path": "/docs/notes.txt"})
    
    # Search query
    results = tfidf.compute_tfidf("budget 2025")
    for doc_id, data in results:
        print(f"Document {doc_id}: Score={data['score']:.4f}, Metadata={data['metadata']}")