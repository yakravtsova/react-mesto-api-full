class Api {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }

  _getAuthHeader() {
    const token = localStorage.getItem('token');
    if (token) {
      return {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }
    else return;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getAllCards() {
    return fetch(`${this._url}cards`, {
      method: 'GET',
      headers: {...this._headers, ...this._getAuthHeader()},
    })
    .then(res => this._handleResponse(res))
  }

  addCard(data) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: {...this._headers, ...this._getAuthHeader()},
      body: JSON.stringify(data)
    })
    .then(res => this._handleResponse(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: {...this._headers, ...this._getAuthHeader()},
    })
    .then(res => this._handleResponse(res))
  }

  likeCard(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {...this._headers, ...this._getAuthHeader()},
    })
    .then(res => this._handleResponse(res))
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {...this._headers, ...this._getAuthHeader()},
    })
    .then(res => this._handleResponse(res))
  }

  changeLikeCardStatus(cardId, likedInverted) {
    return fetch(`${this._url}cards/${cardId}/likes`, {
      method: `${likedInverted ? 'PUT' : 'DELETE'}`,
      headers: {...this._headers, ...this._getAuthHeader()},
    })
    .then(res => this._handleResponse(res))
  }

  getUserData() {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {...this._headers, ...this._getAuthHeader()},
    })
    .then(res => this._handleResponse(res))
  }

  getAllData() {
    return Promise.all([this.getUserData(), this.getAllCards()])
  }

  editUserData(data) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {...this._headers, ...this._getAuthHeader()},
      body: JSON.stringify(data)
    })
    .then(res => this._handleResponse(res))
  }

  editAvatar(avatar) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: {...this._headers, ...this._getAuthHeader()},
      body: JSON.stringify(avatar)
    })
    .then(res => this._handleResponse(res))
  }  
}

const api = new Api(
  'https://api.yakravtsova.students.nomoredomains.sbs/',
  {
    'Content-Type': 'application/json'
  }
);

export default api;