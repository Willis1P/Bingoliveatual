import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Player } from '../types/supabase';

export function Profile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('players')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) throw error;
      
      if (data) {
        setProfile(data);
        setName(data.name || '');
        setAvatarUrl(data.avatar_url || '');
      }
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      const { error } = await supabase
        .from('players')
        .upsert({
          id: user?.id,
          name,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      
      alert('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      alert('Erro ao atualizar perfil');
    }
  };

  if (!user) return null;
  if (loading) return <div>Carregando...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Seu Perfil</h1>
      
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="mb-6">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            value={user.email || ''}
            disabled
            className="w-full p-2 rounded bg-gray-700 text-white opacity-75"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-2">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white mb-2">URL do Avatar</label>
          <input
            type="url"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        {avatarUrl && (
          <div className="mb-6">
            <img
              src={avatarUrl}
              alt="Avatar Preview"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        )}

        <button
          onClick={updateProfile}
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
        >
          Atualizar Perfil
        </button>
      </div>
    </div>
  );
} 